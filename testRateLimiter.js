(async function callApi(){
        const random = Math.floor(Math.random() * (10000 - 19 + 1)) + 19;
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    console.log("file" , random)
    const raw = JSON.stringify({  
      "topLanguageAndSubject": `${random}`
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    await fetch("http://localhost:8000/addLanguage", requestOptions)
    callApi()
    })();