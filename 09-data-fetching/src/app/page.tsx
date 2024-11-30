import InfoCard from "@/components/InfoCard";

const  Home = async () => {
  const response = await fetch('https://simple-books-api.glitch.me/books');
  // console.log(response);
  const fetchData = await response.json() // international data format
  console.log(fetchData.name);
  console.log(fetchData['0'])
  console.log('\n')
    return (
        <div className='flex flex-wrap gap-5 align-middle justify-center h-screen bg-gray-200'>
            <InfoCard name="Abdul Rehman" age={12} role="Software Engineer" />
            <InfoCard name="Marjan"/>
            <InfoCard name="Shahzaib" age={34} role="ahmed" />
            <InfoCard name="Kamil"/>
        </div>
    );
};

export default Home;