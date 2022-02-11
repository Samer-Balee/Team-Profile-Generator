//Import Intern constructor
const Intern = require('../lib/intern');

describe('Intern', () => {
    it('creats an Intern object', () => {
        const intern = new Intern('David', 20, 'david@gmail', 'usyd');

        expect(intern.school).toEqual('usyd');

    })

    it('gets Intern school name', () => {
        const intern = new Intern('David', 20, 'david@gmail', 'usyd');

        expect(intern.getSchool()).toEqual('usyd');

    })

    it('gets role of employee', () => {
        const intern = new Intern('David', 20, 'david@gmail', 'usyd')
        expect(intern.getRole()).toEqual("Intern");
    })

})
