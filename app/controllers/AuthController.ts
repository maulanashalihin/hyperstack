 
import Redis from "../services/Redis";
import Database from "../services/Database"
import Authenticate from "../services/Authenticate"; 

export default class AuthController {
    
  public async registerPage (request,response) { 

    return response.inertia("auth/register")
  }

  public async loginPage (request,response) { 

    return response.inertia("auth/login")
  }

  public async create (request,response) {
  }

  public async processLogin (request,response) {
     
    let body = await request.json(); 
    
    const {email,password} = body;

    const user = await Database.from("users").where("email",email).first();

    if(user)
    {
      const password_match = await Authenticate.compare(password,user.password);

      if(password_match)
      {
        return Authenticate.process(user,response);
      }
      else
      {
        return response.redirect("/login")
      }
    }
    
  }

  public async processRegister (request,response) {
     
    
    let body = await request.json(); 
    const {email,password} = body;

    const id = await Database.table("users").insert({
      email : email,
      password : await Authenticate.hash(password)
    })

    const user = {
      id : id[0],
      email : email
    };

    console.log(user)

    return Authenticate.process(user,response);


 

    
  }

  

  public async show (request,response) {
  }

  public async edit (request,response) {
  }

  public async update (request,response) {
  }

  public async logout (request,response) {

    if(request.cookies.auth_id)
    {
      await Redis.del(request.cookies.auth_id);

      response.clearCookie("auth_id").redirect("/login")
    }
    

  }
}
  