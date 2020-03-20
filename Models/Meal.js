class Meal 
{
    constructor
    (
        id , categoryid , title , affordability , complexity , imageUrl , duration , ingredients ,
        steps , isGlutenFree , isVegan , isVegetarian , isLactoseFree
    )
    {
        this.id = id ;
        this.categoryid =  categoryid;
        this.title = title ;
        this.affordability = affordability ;
        this.complexity =  complexity;
        this.imageUrl =  imageUrl;
        this.duration = duration ;
        this.ingredients = ingredients ;
        this.steps = steps ;
        this.isGlutenFree = isGlutenFree ;
        this.isVegetarian= isVegetarian;
        this.isVegan = isVegan ;
        this.isLactoseFree = isLactoseFree  ;
    }
}

export default Meal ;