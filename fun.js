

let charObj = {
   1: "https://www.tvinsider.com/wp-content/uploads/2015/07/Seinfeld-Kramer-scaled.jpg",
   2: "https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E",
   3: "https://i.guim.co.uk/img/media/566eaabfa38fa53582fa2c74d4d7a45144af1111/0_179_2000_1201/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7d9dc1fd0cc3fa701e80be6c5ebef3aa",
   4: "https://practicaltyping.com/wp-content/uploads/2020/09/vegeta2.jpg",
   5: "https://enews.wvu.edu/files/dd4669e6-3244-4e00-81b3-f27f67a6deb6/1200x?cb=b0513f9ec794dc6662edad68b39ab7ed",
   6: "https://i.pinimg.com/originals/1f/fc/73/1ffc735f02d4cc1e3463d293bc41500c.jpg",
   7: "https://www.themoviedb.org/t/p/w235_and_h235_face/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg",
   8: "https://www.looper.com/img/gallery/mr-miyagis-entire-backstory-explained/intro-1594928794.jpg",
   9: "https://pbs.twimg.com/media/CuSxLvwW8AA_4Sl.jpg",
   10: "https://bbts1.azureedge.net/images/p/full/2020/12/4fc24845-bb8f-4b68-8380-2fe7198f976a.jpg"

}





const button = document.getElementById("button")
const one = document.getElementById("one")
const two = document.getElementById("two")

function randomNum (){
    let ranOne = Math.floor(Math.random()*10+1)
    let ranTwo = Math.floor(Math.random()*10+1)
    if (ranOne === ranTwo){
        randomNum()
    } else {
        one.src = charObj[ranOne]
        two.src = charObj[ranTwo]
    }
   
}




button.addEventListener("click", function(){
randomNum()

  
})