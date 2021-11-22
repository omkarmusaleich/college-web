import React, { useRef, useState } from 'react'

const FormForOrder = (props) => {
    const [fname, setFname] = useState(true)
    const [lname, setLname] = useState(true)
    const [isemail, setIsemail] = useState(true)
    const [iscity, setIscity] = useState(true)
    const [iszip, setIszip] = useState(true)

    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let emailValid = false;
        let fnameValid = false;
        let lnameValid = false;
        let cityValid = false;
        let zipValid = false;
        if (fnameRef.current.value.trim().length > 0) {
            fnameValid = true;
        }
        else {
            setFname(false)
        }

        if (lnameRef.current.value.trim().length > 0) {
            lnameValid = true;
        }
        else {
            setLname(false);
        }

        if (emailRef.current.value.trim().includes('@')) {
            emailValid = true;
        }
        else {
            setIsemail(false);
        }

        if (cityRef.current.value.trim().length > 0) {
            cityValid = true;
        }
        else {
            setIscity(false)
        }

        if (zipRef.current.value.trim().length === 6) {
            zipValid = true;
        }
        else {
            setIszip(false);
        }


        if (emailValid && fnameValid && lnameValid && cityValid && zipValid) {
            console.log("sucseefull");
            props.Fill()
        }
        else {
            return;
        }
    }


    return (
        <form className="w-full max-w-lg mx-auto mt-10" onSubmit={submitHandler}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" onFocus={() => setFname(true)}>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="omkar" ref={fnameRef} />
                    {!fname && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/2 px-3" onFocus={() => setLname(true)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="musale" ref={lnameRef} />
                    {!lname && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6" onFocus={() => setIsemail(true)}>
                <div className="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" ref={emailRef} />
                    {!isemail && <p className="text-red-500 text-xs italic">Please fill out Email.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" onFocus={() => setIscity(true)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        City
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" ref={cityRef} />
                    {!iscity && <p className="text-red-500 text-xs italic">Must Fill</p>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Maharashtra</option>
                            <option>Goa</option>
                            <option>Gujrat</option>
                            <option>Bihar</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0" onFocus={() => setIszip(true)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Pin Code
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="416 118" ref={zipRef} />
                    {!iszip && <p className="text-red-500 text-xs italic">6 character present</p>}
                </div>
                
                <div className='mt-10 mx-auto'>
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option selected disabled>Select Payment Mode</option>
                        <option>UPI</option>
                        <option>Debit Card</option>
                        <option>Credit Card</option>
                        <option>Cash On Delivery</option>
                    </select>
                </div>

            </div>
            <div className='flex justify-center items-center my-10'>
                <button className='px-3 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-md text-lg'>Order</button>
            </div>
        </form>
    )
}

export default FormForOrder
