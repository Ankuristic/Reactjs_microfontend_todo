import React, { useState } from 'react';
import datas from './datas';

const Language: React.FC = () => {
    const [lang, setLang] = useState<string>(''); // State for selected language/dish

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value); // Update selected language/dish
    };

    // Filter data based on the selected language/dish
    const filteredData = datas.filter((data) => data.name === lang);

    return (
        <>
            <div>
                <nav className='flex justify-between items-center p-4 bg-green-700'>
                    <label htmlFor="lang" className="mr-2">Choose the Language:</label>
                    <select name="language" id="lang" onChange={handleLanguageChange} className="p-2">
                        <option value=""> Select a   Language </option>
                        {datas.map((data) => (
                            <option key={data.id} value={data.name}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                </nav>

                {/* Render all the data related to the selected /Language  */}
                <div>
                    {filteredData.map((data) => (
                        <div key={data.id} className="mt-4 p-4 bg-gray-200">
                            <h3>{data.topic1}</h3>
                            <h3> {data.topic3}</h3>
                            <p>{data.topic2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Language;
