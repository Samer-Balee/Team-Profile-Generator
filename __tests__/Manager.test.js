//Import manager constructor
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('creats a Manager object', () => {
        const manager = new Manager('David', 20, 'david@gmail', 5);

        expect(manager.officeNumber).toEqual(5);

    })
    it('gets role of employee', () => {
        const manager = new Manager('David', 20, 'david@gmail', 5)
        expect(manager.getRole()).toEqual("Manager");
    })

})


















