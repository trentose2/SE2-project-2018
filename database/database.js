let database = {
    User: [
        {
            id: 1, 
            name: 'Piero', 
            surname: 'Grasso', 
            uniNumber: 182930, 
            isTeacher: true, 
            email: 'piero@grasso.it', 
            password: 'abc123',
            examsList: [1,2]
        },
        {
            id: 2, 
            name: 'Giovanni', 
            surname: 'Guru', 
            uniNumber: 156789, 
            isTeacher: false, 
            email: 'giovanniGuru@uni.it', 
            password: '123abc',
            examsList: [1,3]
        },
        {
            id: 3, 
            name: 'Aurora', 
            surname: 'Gelmini', 
            uniNumber: 182930, 
            isTeacher: true, 
            email: 'aurora.gelmini@unitn.it', 
            password: '098qwe',
            examsList: [3]
        },
        {
            id: 4, 
            name: 'Chiara', 
            surname: 'Romano', 
            uniNumber: 567810, 
            isTeacher: false, 
            email: 'chiara.romano@yahoo.it', 
            password: 'tyop09',
            examsList: [1,2,3]
        },
        {
            id: 5, 
            name: 'Britney', 
            surname: 'Spears', 
            uniNumber: 182930, 
            isTeacher: true, 
            email: 'britney.spears@america.it', 
            password: 'zxfgui',
            examsList: [3]
        }
    ],
    Class: [
        {   
            id: 1, 
            name: 'Siamo Veramente Euforici', 
            participants: [1, 2, 3, 4, 5]
        }, 
        {
            id: 2, 
            name: 'Povolesi', 
            participants: [1, 2, 4, 5]
        },
        {
            id: 3, 
            name: 'Heroku Siffredi', 
            participants:[2, 3, 4, 5]
        },
        {
            id: 4, 
            name: 'JSONnambuli', 
            participants:[1, 3, 4, 5]
        }
    ],
    Task:[
        {
            id : 1,
            question: 'domanda1',
            questionType: 'multipleChoice',
            choices: ['ris1', 'ris2', 'ris3', 'ris4'],
            answers: ['ris1', 'ris2'],
            teacher: 1
        },
        {
            id : 2,
            question: 'domanda2',
            questionType: 'multipleChoice',
            choices: ['ris1', 'ris2', 'ris3'],
            answers: ['ris3'],
            teacher: 3
        },
        {
            id : 3,
            question: 'domanda3',
            questionType: 'openAnswer',
            choices: undefined,
            answers: undefined,
            teacher: 3
        },
        {
            id : 4,
            question: 'domanda3',
            questionType: 'openAnswer',
            choices: undefined,
            answers: undefined,
            teacher: 3
        }
    ],
    TaskGroup: [
        {
            id: 1, 
            name: 'taskgroup1', 
            numberTasks: 2,  
            tasks: [1,2]
        },
        {
            id: 2, 
            name:'taskgroup2', 
            numberTasks: 1, 
            tasks: [3]
        },
        {
            id: 3, 
            name:'taskgroup3', 
            numberTasks: 3, 
            tasks: [1,2,3]
        }
    ],
    Exam: [
        {
            id:1, 
            taskgroup: 2, 
            startline: "05/12/2018 09:00", 
            deadline: "05/12/2018 09:00", 
            classes: [1,2],
            teacher: 1
        },
        {
            id: 2, 
            taskgroup: 1, 
            startline: "05/12/2018 09:00", 
            deadline: "05/12/2018 09:00", 
            classes: [1,3],
            teacher: 1
        },
        {
            id: 3, 
            taskgroup: 3, 
            startline: "05/12/2018 09:00", 
            deadline: "05/12/2018 09:00", 
            classes: [2,4],
            teacher: 1
        }
    ],
    Submission: [
        {
            id: 1, 
            class: 1, 
            teacher: 1, 
            student: 4,
            exam: 1, 
            data: "05/12/2018 09:00",
            answer: ['Fabio', 'A', 'git add', '3']
        },
        {
            id: 2, 
            class: 3, 
            teacher: 5, 
            student: 2,
            exam: 1, 
            data: "06/12/2018 10:00",
            answer: ['Fabio', 'B', 'git commit', '1']
        },
        {
            id: 3, 
            class: 4, 
            teacher: 5, 
            student: 2,
            exam: 1, 
            data: "07/12/2018 11:00",
            answer: ['Fabio', 'B', 'git push', '2']
        }
    ],
    Review: [
        {
            id: 1,
            submission: 1,
            uniNumber: 182930,
            feedback: 'Good exam',
            mark: 24
        },
        {
            id: 2,
            submission: 3,
            uniNumber: 156789,
            feedback: 'Bad exam',
            mark: 18
        },
        {
            id: 3,
            submission: 2,
            uniNumber: 567810,
            feedback: 'Quite perfect exam',
            mark: 28
        }
    ]
    
};

/**
 * prende l'item e una tabella del database e aggiunge l'elemento alla tabella
 * @param {String} tabella il nome della tabella in cui aggiornare l'elemento
 * @param {Object} item l'item da aggiungere, già contenente l'id
 * @returns true se va a buon fine false altrimenti
 */
const addItem =  (tabella, item) => {
    
    let temp = getNewId(tabella)
    if(temp != -1){
        item.id = temp;

        switch (tabella){
            case 'User' :
                database.User.push(item);
                return true;
            case 'Class' :
                database.Class.push(item);
                return true;
            case 'Task' :
                database.Task.push(item);
                return true;
            case 'TaskGroup' :
                database.TaskGroup.push(item);
                return true;
            case 'Exam' :
                database.Exam.push(item);
                return true;
            case 'Review' :
                database.Review.push(item);
                return true;
            case 'Submission' :
                database.Submission.push(item);
                return true;
        }

        return false;

    } else {

        return false;
        
    }
}


/**
 * aggiorna l'item passato nella tabella specificata
 * @param {String} tabella il nome della tabella da cui prendere l'elemento
 * @param {Object} item l'elemento da aggiornare
 * @returns true se va a buon fine false altrimenti 
 */
const updateItem = (tabella, item) => {
    let vettore = null;
    
    switch (tabella){
        case 'User' :
            vettore = database.User;
            break;
        case 'Class' :
            vettore = database.Class;
            break;
        case 'Task' :
            vettore = database.Task;
            break;
        case 'TaskGroup' :
            vettore = database.TaskGroup;
            break;
        case 'Exam' :
            vettore = database.Exam;
            break;
        case 'Review' :
            vettore = database.Review;
            break;    
        case 'Submission' :
            vettore =  database.Submission;
            break;
    }

    for( let i = 0; i<vettore.length; i++){
        if (vettore[i].id == item.id){
            vettore[i] = item;
            database[tabella] = vettore;
            return true;
        }
    }

    return false;
}


/**
 * elimina in base all'id e alla tabella specificata l'item corrispondente se esiste
 * @param {String} tabella il nome della tabella da cui prendere l'elemento
 * @param {Number} id l'id dell'elemento richiesto
 * @returns true se va a buon fine false altrimenti 
 */
const deleteById =  (tabella, id) => {
    
    let vettore = null;
    
    switch (tabella){
        case 'User' :
            vettore = database.User;
            break;
        case 'Class' :
            vettore = database.Class;
            break;
        case 'Task' :
            vettore = database.Task;
            break;
        case 'TaskGroup' :
            vettore = database.TaskGroup;
            break;
        case 'Exam' :
            vettore = database.Exam;
            break;
        case 'Review' :
            vettore = database.Review;
            break;    
        case 'Submission' :
            vettore =  database.Submission;
            break;
    }

    for( let i = 0; i<vettore.length; i++){
        if (vettore[i].id == id){
            vettore.splice(i, 1);
            database[tabella] = vettore;
            return true;
        }
    }

    return false;
}


/**
 * prende in base all'id e alla tabella specificata l'item corrispondente se esiste
 * @param {String} tabella il nome della tabella da cui prendere l'elemento
 * @param {Number} id l'id dell'elemento richiesto
 * @returns null nel caso non sia stato trovato l'elemento richiesto altrimenti l'elemento
 */
const getById =  (tabella, id) => {

    let vettore = null;

    switch (tabella){
        case 'User' :
            vettore = database.User;
            break;
        case 'Class' :
            vettore = database.Class;
            break;
        case 'Task' :
            vettore = database.Task;
            break;
        case 'TaskGroup' :
            vettore = database.TaskGroup;
            break;
        case 'Exam' :
            vettore = database.Exam;
            break;
        case 'Review' :
            vettore = database.Review;
            break;    
        case 'Submission' :
            vettore =  database.Submission;
            break;
    }

    for (let i = 0; i<vettore.length ; i++){
        if(vettore[i].id == id){
            return vettore[i];
        }
    }

    return null;
}


/**
 * elimina dal database la tabella richiesta
 * @param {String} tabella il nome della tabella da eliminare
 * @returns true se va a buon fine false altrimenti
 */
const deleteAll = (tabella) => {
    let tmp = getAll(tabella);
    if (tmp.length > 0) {
        switch (tabella){
            case 'User' :
                database.User = [];
                return true;
            case 'Class' :
                database.Class.splice(0);
                return true;
            case 'Task' :
                database.Task = []; 
                return true;
            case 'TaskGroup' :
                database.TaskGroup = [];
                return true;
            case 'Exam' :
                database.Exam = [];
                return true;
            case 'Review' :
                database.Review = [];
                return true; 
            case 'Submission' :
                database.Submission = [];
                return true;
        }
    } else {
        return false;
    }
}


/**
 * prende dal database la tabella richiesta
 * @param {String} tabella il nome della tabella da ritornare
 * @returns true se va a buon fine false altrimenti
 */
const getAll = (tabella) => {
    switch (tabella){
        case 'User' :
            return database.User;
        case 'Class' :
            return database.Class;
        case 'Task' :
            return database.Task;
        case 'TaskGroup' :
            return database.TaskGroup;
        case 'Exam' :
            return database.Exam;
        case 'Review' :
            return database.Review;
        case 'Submission' :
            return database.Submission;
    }

    return null;
}


/**
 * calcola l'id corretto per inserire un nuovo elemento in una tabella
 * @param {String} tabella tabella da cui prendere l'id
 * @returns l'id se va a buon fine altrimenti -1 
 */
const getNewId = (tabella) => {
    if( tabella == 'User' || tabella == 'Task' ||
        tabella == 'TaskGroup' || tabella == 'Class' || tabella == 'Exam' ||
        tabella == 'Review' || tabella == 'Submission'){

            let vettore = database[tabella];
            
            if(vettore.length == 0){
                return 1;
            }else {
                return vettore[vettore.length -1].id +1;
            }
    }

    return -1;
}


module.exports = {getAll, getById, deleteAll, deleteById, addItem, updateItem, getNewId};