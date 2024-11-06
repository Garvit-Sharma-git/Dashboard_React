import React, { useState } from 'react';
// import header from '../components/Header';
// import sidebar from '../components/Sidebar';

import Modal from 'react-modal';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer, PieChart, Pie
} from 'recharts';

Modal.setAppElement('#root');

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', linkedin: '', youtube: '' });
    const [formSection, setFormSection] = useState('Basic');

    const data1 = [
        { name: 'Basic Tees', value: 400 },
        { name: 'Customer Short Pants', value: 300 },
        { name: 'Super Hoodies', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const data = [
        { name: 'Week 1', uv: 400, pv: 500, amt: 2400 },
        { name: 'Week 2', uv: 450, pv: 370, amt: 2210 },
        { name: 'Week 3', uv: 300, pv: 200, amt: 2290 },
        { name: 'Week 4', uv: 350, pv: 400, amt: 2000 },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsVisible(false);
        setFormData({ name: '', email: '', phone: '', linkedin: '', youtube: '' });
    };
    

    return (
        <main className='main-container'>
            
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <BsFillArchiveFill className='card_icon' />
                        <p>Total Revenues</p>
                        <h3>$2,129,430</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <BsFillGrid3X3GapFill className='card_icon' />
                        <p>Total Transactions</p>
                        <h3>1,520</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <BsPeopleFill className='card_icon' />
                        <p>Total Likes</p>
                        <h3>9,721</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <BsPeopleFill className='card_icon' />
                        <p>Total Users</p>
                        <h3>9,721</h3>
                    </div>
                </div>
            </div>
            

            <div className='charts'>
                <div className='bar-chart-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='pie-chart-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data1}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={70}
                                dataKey="value">
                                {data1.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='add'>
                <div className="add-profile-container" onClick={() => setIsVisible(true)}>
                    <span className="plus-icon">+</span>
                    <h3>Add Profile</h3>
                </div>

                <Modal
                    isOpen={isVisible}
                    onRequestClose={() => setIsVisible(false)}
                    style={{
                        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                        content: {
                            top: '50%', left: '50%', right: 'auto', bottom: 'auto',
                            marginRight: '-50%', transform: 'translate(-50%, -50%)',
                            padding: '20px', width: '400px', borderRadius: '10px',
                        },
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Profile</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                        <button
                            onClick={() => setFormSection('Basic')}
                            style={{
                                padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer',
                                backgroundColor: formSection === 'Basic' ? '#0000FF' : '#ddd',
                                color: formSection === 'Basic' ? '#fff' : '#333', border: 'none',
                                borderRadius: '5px', marginRight: '10px'
                            }}
                        >
                            Basic
                        </button>
                        <button
                            onClick={() => setFormSection('Social')}
                            style={{
                                padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer',
                                backgroundColor: formSection === 'Social' ? '#0000FF' : '#ddd',
                                color: formSection === 'Social' ? '#fff' : '#333', border: 'none',
                                borderRadius: '5px'
                            }}
                        >
                            Social
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                        {formSection === 'Basic' && (
                            <>
                                {['name', 'email', 'phone'].map((field) => (
                                    <div className="form-group" key={field} style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%', padding: '10px', borderRadius: '5px',
                                                border: '1px solid #ddd', fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                        {formSection === 'Social' && (
                            <>
                                {['linkedin', 'youtube'].map((field) => (
                                    <div className="form-group" key={field} style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                                            {field.charAt(0).toUpperCase() + field.slice(1)} Profile:
                                        </label>
                                        <input
                                            type="url"
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%', padding: '10px', borderRadius: '5px',
                                                border: '1px solid #ddd', fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <button
                                type="submit"
                                style={{
                                    padding: '10px 20px', borderRadius: '5px',
                                    backgroundColor: '#0000FF', color: '#fff', fontWeight: 'bold'
                                }}
                            >
                                Next
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsVisible(false)}
                                style={{
                                    padding: '10px 20px', borderRadius: '5px',
                                    backgroundColor: '#f44336', color: '#fff', fontWeight: 'bold'
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </main>
    );
}

export default Home;

