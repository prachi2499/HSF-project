export class user_adv_contest_c{
  constructor(


    public a_contest_id:number,
    public a_language:string,
    public a_projectname:string,
    public a_timeline:string,
    public a_price:number,
    public s_time?:string,
    public e_time?:string,
    public fkuser_id?:string,
    public fkdesigner_id?:string,
    public fksubcat_id?:number,
    public name?:string,
    public email_id?:string,
    public subcat_id?:number,
    public subcat_name?:string

  ){

  }
}
