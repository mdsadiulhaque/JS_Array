

const video ={
    title: 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
        console.log(this.title,tag);},

     this);
}
};

video.showTags();


function playVideo(a,b){
    console.log(this);

}

playVideo.call({name.'Fahad'},1,2);
playVideo.apply({name.'Fahad'},[1,2]);
playVideo.bind({name.'Fahad'})());

playVideo();

