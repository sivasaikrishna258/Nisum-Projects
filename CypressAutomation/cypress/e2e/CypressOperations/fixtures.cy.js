describe('fixtures data', ()=>{
    it('get the data from fixtures', ()=>{

        //navigated to website
        cy.visit('https://stqatools.com/demo/index.php')

        /*get the fixture file and store it in data1 variable 
        using data1 variable access the fixture file properties
        */
        cy.fixture('login').then(  (data1) =>{
            cy.get('#username').type(data1.username)
            cy.get('#password').type(data1.password)
        })

    });

        it.only('data driven testing', ()=>{

            //get the fixture file which contains multiple sets of data
            cy.fixture('dataDriven').then( (data) =>{

                //iterate each set of data using forEach loop and store it in userdata 
              data.forEach(userdata => {

                cy.visit('https://stqatools.com/demo/index.php')

                //access the properties of each set using userdata
                cy.get('#username').type(userdata.username)
                cy.get('#password').type(userdata.password)
                
              
                   
                })
            })
    
           


       

       
    })
})