
const page = () => {

    const stepData = [
        {
          id: 1,
          step: "step 01",
          label: "Go to Account Section.",
          list1: [
            "In the account section ,go to Profile page"],
          image: "/delete/1.jpeg",
        },
        {
          id: 2,
          step: "step 02",
          label: "Go to your Profile Section.",
          list1: [
            "In the profile section ,At the bottom of the page you can see the option for Deleting Account.",
          ],
          image: "/delete/2.jpeg",
        },
        {
          id: 3,
          step: "step 03",
          label:
            "Confirm and Send Request",
          list1: [`After reading all the instructions, click on "Send Request." This will take you to the mail option where you can send an email to delete your account.`],
          image: "/delete/3.jpeg",
        },
       
       
      ];


  return (
    <div className="">
            
      <div className="p-5 lg:p-10">
        <div className="lg:text-center">
          <h1 className="text-3xl pb-2 font-semibold">How to delete your Account</h1>
          <p className='text-base'>
            Deleting your account on Ibinibiso is easy. Simply follow the steps below.
          </p>
        </div>
            <div className='lg:flex'>

        {stepData?.map((item, index) => (
          <div className=" flex-1 py-10 lg:mx-6  xl:mx-10">
            <div className=" lg:px-4 xl:px-10 flex flex-col items-start justify-center">
              <h2 className="text-3xl text-green-600 font-bold uppercase">
                {item.step} <span className=' ml-4 lg:ml-8'>{index !==2 ? `----->` : ""}</span>
              </h2>
              <h3 className="pb-5 font-medium text-lg">{item.label}</h3>
              <ul className="space-y-2 text-sm lg:text-base mb-10">
                {item?.list1?.map((item, index) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <img src={item.image} className='shadow-lg  w-auto   ' />
            </div>
          </div>
        ))}
                    </div>

      </div>

            </div>
  )
}

export default page