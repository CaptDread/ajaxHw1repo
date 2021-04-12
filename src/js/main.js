class ApiTest {


    BASE_API_URL = 'http://circuslabs.net:3000/data'

    constructor() {
        console.log('ApiTest()')

        this.messageEl = document.querySelector('p.getMessage')
        this.setupListeners()
    }

    showMessage = (message) => {
        this.messageEl.textContent = message
    }

    setupListeners() {
        var getForm = document.querySelector('form.get')
        var postForm = document.querySelector('form.post')
        getForm.addEventListener('submit', this.getData)
        postForm.addEventListener('submit', this.postData)
    }

    getData = (evt) => {
        evt.preventDefault()
        console.log('retrieving data sire')

        var key = document.querySelector('[name="key"]').value
        axios.get(`${this.BASE_API_URL}/${key}`).then(this.processsResponse ).catch(this.processError)
    }
    processsResponse = (response) => {
        console.log(`processing response, my liege`, response)
        this.showMessage('Your data, my liege: ' + response.data.data.value)
    }
    processError = (error) => {
        console.log('there was an error, my liege.', error)

        this.showMessage('Error! ' + error.message)
    }

    postData = (evt) => {
        evt.preventDefault()
        var key = document.querySelector('[name="key"]').value
        var messageVal = document.querySelector('[name="message"]').value
        console.log('Preparing to post the key data: ' + key + ': ' + messageVal)

        // var objData = {
        //     value: `${messageVal}`,
        //     type: 'string',
        //     key: `${key}`,
        // }

        axios.post(`${this.BASE_API_URL}/${key}`, {
            value: `${messageVal}`,
            type: 'string',
            key: `${key}`,
        }).then(function (response){
            console.log(response);
        }).catch (function (response) {
            console.log(response)
        })

    }
}

new ApiTest()