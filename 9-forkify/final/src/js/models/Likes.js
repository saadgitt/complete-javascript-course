//Saad's file to save likes
export default class Likes {
    constructor() {
        this.likes = []; //to store likes
    }
    addLike(id, title, author, img) { //since we need all of this to display likes.
         const like = {id, title,author, img};
         this.like.push(like); //store that like 
         return like;
    }
    deleteLike(id)
    {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1); //removes likes.
    }
    isLiked(id)
    {
        return this.likes.findIndex(el => el.id === id) !== -1; //returns false if id not found
    }
    getNumLikes()
    {
        return this.likes.length; //likes count 
    }
}