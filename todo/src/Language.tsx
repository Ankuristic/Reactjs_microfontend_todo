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



// Intuition and Approach:
// Basic Palindrome Check:

// Pehle check karo ki kya string s already palindrome hai. Agar hai, toh obviously answer true hoga.
// Agar string palindrome nahi hai, toh dekho ki usme kitne mismatched characters hain.
// Two Pointers Technique:

// Tum do pointers use karoge: ek start se (left pointer) aur ek end se (right pointer).
// Yeh pointers check karenge ki start aur end ke characters match karte hain ya nahi. Agar match karte hain, toh pointers ko aage badhao (left ko right ki taraf aur right ko left ki taraf).
// Mismatch Handling:

// Agar kisi point par left aur right characters match nahi karte, toh yeh socho ki mismatch ko kaise handle karna hai. Do possibilities hain:
// Left wale character ko skip karo.
// Right wale character ko skip karo.
// Tum dono cases ko individually check kar sakte ho ki kya remaining string palindrome ban rahi hai ya nahi.
// Final Check:

// Agar koi bhi ek case successful hota hai, toh answer true hoga. Agar dono case fail hote hain, toh answer false hoga.
// Example:
// Let's consider the string "abca":

// Start mein left pointer a pe hoga aur right pointer a pe hoga, so they match.
// Phir left pointer b pe hoga aur right pointer c pe hoga, yeh mismatch hai.
// Ab do cases check karo:
// left pointer ko skip karo, remaining string "bca" ko palindrome check karo.
// right pointer ko skip karo, remaining string "abc" ko palindrome check karo.
// Pehla case (bca) palindrome nahi hai, lekin dusra case (abc) palindrome hai. Toh answer true hoga.
// Final Steps:
// Tumhe basically check karna hai ki kya string ke beech mein ek character ko remove karne se palindrome ban raha hai ya nahi. Agar haan, toh true, warna false.
// Yeh approach efficient hai aur isse tum given problem ko easily solve kar sakte ho. Ab tum is intuition ko use karke Java ya kisi bhi language mein code likh sakte ho!