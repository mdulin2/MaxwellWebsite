
class BlogPosts{
  constructor(){
    this.num_posts;
    this.show_level;
    this.num_lines;
    this.setupPosts();
  }

  /* Show levels:
    1. Just the title
    2. Show n number of lines
    3. Show the whole item
  */
  setupPosts() {
      this.num_posts = 4;
      this.show_level = 1;
      this.num_lines = 0;
      if(this.show_level == 1){
        this.num_lines = 2;
      }
      else if(this.show_level == 2){
        this.num_lines = 1;
      }
      else{
        this.num_lines = 999999;
      }
  }

  /* Will display all of the posts */
  displayPosts(){
    var posts = this.getPosts();
    var output = "";
    var format = "<HR width = '95%'>";
    if(this.num_posts >= posts.length-1){
      this.num_posts = posts.length;
    }

    /* Just displaying the title */
    if(this.show_level == 1){
      for(var i = 0; i < this.num_posts; i++){
        var blog_post = posts[i];
        var blog_parts = blog_post.split("</h1>");
        var title = `<div style">`+ blog_parts[0] +`</div>`;
        var output = `<a onclick = "clearBox('content'); document.getElementById('content').innerHTML = blog.getIndividualPost(`+ i +`);" href ='#'  style = "text-decoration: none; font-size: 80%;"
        "> ` + title + "</a>";
        document.write(output);
        document.write(format);

        /* Add some sort of formatting here! */
        }
    }

    /* For n number of lines to be displayed */
    else if(this.show_level == 2){

      for(var i = 0; i < this.num_posts; i++){
        var blog_post = posts[i];
        var blog_parts = blog_post.split("</p>");
        var output = "";
        var line_count = this.num_lines;
        var count = this.num_lines;

        /*Checking to see if the number of paragraphs is not greater than the number of lines shown */
        if(blog_parts.length <= this.num_lines){
          var count = blog_parts.length;
        }
        console.log(count);
        /*Iterates through the correct amount of lines in the post */
        var output = "";
        for(var line = 0; line < count; line++){
          output = output + blog_parts[line];
        }
        output = output + ".....";
        document.write(output);
        document.write(format);
      }
    /* Displays the whole post */
    }else{
      for(var i =0; i <this.num_posts; i++){
        document.write(posts[i]);
        document.write(format);
      }
    }
    return;
  }

  /*Returns the value of a whole post */
  getIndividualPost(num){
    var back_button = this.makeBackButton();
    var posts = this.getPosts();
    var post_return = posts[num];
    return back_button + post_return;
  }

  /* Creates the back button for the page */
  makeBackButton(){
    var back_button = `<div class = "BackButton"> &#9668; Back </div>`;
    var output = `<a href="./Blog.html" style = "text-decoration: none;">`+ back_button+ `</a>`
    return output;
  }

  /* Gets all of the posts from their stored location */
  getPosts(){
    var post0 = ``
    var post1 = `<h1>By so delight of showing neither believe he present <div class = "Date"> July 11,2017</div></h1><p>Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or ampromotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.</p>`

    var post2 =` <h1> Heads! <div class = "Date"> July 11,2017</div> </h1> <p>Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. </p>
    <p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active. Equally journey wishing not several behaved chapter she two sir. Deficient procuring favourite extensive you two. Yet diminution she impossible understood age. </p>`
    var post3 = `<h1> Hellow rodl! <div class = "Date"> July 11,2017</div> </h1>
    <p>Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.</p>

    <p>Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am.</p>

    <p>Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. On three thing chief years in money arise of.</p>

    <p>Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.</p>

    <p>In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as.</p>

    <p>Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.</p>

    `;
      var posts = [post1,post2,post3];
      return posts;
    }

  /* This will post all of the blog posts that I want it to. */

}
