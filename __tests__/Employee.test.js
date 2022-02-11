//import Employee constructor
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('creats an employee object', () => {
        const employee = new Employee('David', 20, 'david@gmail.com');

        expect(employee.name).toEqual('David');
        expect(employee.id).toEqual(20);
        expect(employee.email).toEqual('david@gmail.com');

    })

    it('gets employee name', () => {
        const employee = new Employee('David', 20, 'david@gmail.com')
        expect(employee.getName()).toEqual('David');
    })
    
    it('gets employee ID', () => {
        const employee = new Employee('David', 20, 'david@gmail.com')
        expect(employee.getId()).toEqual(20);
    })

    it('gets employee email', () => {
        const employee = new Employee('David', 20, 'david@gmail.com')
        expect(employee.getEmail()).toEqual('david@gmail.com');
    })

    it('gets role of employee', () => {
        const employee = new Employee('David', 20, 'david@gmail.com')
        expect(employee.getRole()).toEqual("Employee");
    })

})
