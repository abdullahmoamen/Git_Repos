let theInput=document.querySelector('input'),
    getBtn=document.querySelector('.get-button'),
    reposData=document.querySelector('.show-data');

    getBtn.onclick=()=>{
        getRepos()
    }
    function getRepos(){
    if(theInput.value==''){
        reposData.innerHTML=`<span> please enter any correct value </span>`
    }else{
        fetch(`http://api.github.com/users/${theInput.value}/repos`)
        .then(response =>
            response.json())
        .then((data) =>{
            //empty container
            reposData.innerHTML='';
            // loop on repos
            data.forEach(repo =>{
                //create main div
                let mainDiv = document.createElement('div');

                // create repo name text
                let repoName = document.createTextNode(repo.name);

                // append text to main div
                mainDiv.appendChild(repoName);

                // create repo URL 
                let url=document.createElement('a');

                // create repo url txt
                let urlTxt=document.createTextNode('visit')

                // append url txt to a 
                url.appendChild(urlTxt);

                //add href 
                url.href =`https://github.com/${theInput.value}/${repo.name}`;

                // set attribute _blank
                url.setAttribute('target','_blank');

                //append url to main div
                mainDiv.appendChild(url)

                // add class to main div
                mainDiv.className='main-box';
                
                // append main div to container
                reposData.appendChild(mainDiv);


                //focus
                theInput.focus();
                

            })
                
            });
            
            
            
    }}