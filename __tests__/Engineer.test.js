//Import Engineer constructor
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('creats an Engineer object', () => {
        const engineer = new Engineer('David', 20, 'david@gmail', 'david123');

        expect(engineer.github).toEqual('david123');

    })

    it('gets Engineer github value', () => {
        const engineer = new Engineer('David', 20, 'david@gmail', 'david123');

        expect(engineer.getGitHub()).toEqual('david123');

    })

    it('gets role of employee', () => {
        const engineer = new Engineer('David', 20, 'david@gmail', 'david123')
        expect(engineer.getRole()).toEqual("Engineer");
    })

})
