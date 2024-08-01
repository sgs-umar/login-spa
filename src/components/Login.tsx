import React from 'react'

function Login() {
    return (
        <div className='box-border w-96 p-3 bg-blue-200 outline outline-1 rounded-xl'>
            <form>
                <div className='mb-2'>
                    <label htmlFor="employee_name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                    <input type="text" id="employee_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select a Department</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select a Designation</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900">Enter Salary</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <button type="button" className="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ADD</button>
            </form>
        </div>
    )
}

export default Login