const ageCal = document.querySelector(`#age_form`);
const result = document.querySelector(`#result`);

ageCal.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector(`input[type="date"]`).value;
    let time = this.querySelector(`input[type="time"]`).value;

    let end_date = new Date();
    let start_date = new Date( date + ' ' + time );

    let time_diff = Math.floor((end_date.getTime() - start_date.getTime()));

    let secs = Math.floor( time_diff / 1000 );
    let mins = Math.floor( secs / 60 );
    let hours = Math.floor( mins / 60 );
    let days = Math.floor( hours / 24 );
    let weeks = Math.floor( days / 7 );
    let months = Math.floor( days / 30.4375 );
    let years = Math.floor( months / 12 );

    let month = months - ( years * 12 );
    let day = ( days - ( month * 30.4375 ) - ( years * 12 * 30.4375 ));

    result.innerHTML = `
                    <div class="card-footer alert alert-primary">
                        <h1>AGE:</h1>
                        <h3>${ Math.floor( years ) } years ${ Math.floor( month ) } months ${ Math.floor( day ) } days</h3>
                        <h3>or ${ days } days</h3>
                        <h3>or ${ hours } hours</h3>
                        <h3>or ${ mins } minutes</h3>
                        <h3>or ${ secs } seconds</h3>
                    </div>
    `;
        
})
