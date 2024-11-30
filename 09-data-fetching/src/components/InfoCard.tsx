interface IProps {
  name: string;
  age?: number;
  role?: string;
}

const InfoCard = ({ name, age, role }: IProps) => {
  console.log({ name, age, role });
  return (
      <div className='h-[300px] w-[300px] bg-white mt-20 p-1 px-8 py-10 rounded-sm shadow-lg'>
          <h1 className='text-2xl font-bold font-[poppins]'>Name:</h1>
          <p>{name}</p>
          <br />
          <h1 className='text-2xl font-bold font-[poppins]'>Age:</h1>
          <p>{age ? age : "undefined"}</p>
          <br />
          <h1 className='text-2xl font-bold font-[poppins]'>Role:</h1>
          <p>{role ? role : "undefined"}</p>
      </div>
  );
};

export default InfoCard;
