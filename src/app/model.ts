export class Model{
    user: string;
    items;

    constructor(){
        this.user = "Kaya";
        this.items =[
                        new TodoItem("Kahvaltı", true),
                        new TodoItem("Spor", true),
                        new TodoItem("Sinema", false),
                        new TodoItem("Kitap Okuma", false),           
                    ];
    }
}

 export class TodoItem{
     description;
     action;

     constructor(description, action){
         this.description = description;
         this.action = action;
     }
 }