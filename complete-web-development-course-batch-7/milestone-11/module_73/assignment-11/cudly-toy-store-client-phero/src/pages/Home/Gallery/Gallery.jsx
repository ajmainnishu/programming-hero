import { useState } from 'react';
import { useEffect } from 'react';

const Gallery = () => {
    // galley state
    const [galleries, setGalleries] = useState([]);
    // gallery fetch from local
    useEffect(() => {
        fetch('/gallery.json')
            .then(res => res.json())
            .then(data => setGalleries(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-center mb-20'>Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='space-y-5'>
                    {/* part 1 */}
                    {
                        galleries.slice(0, 3).map(gallery => <div key={gallery.id}>
                            <img src={gallery.img} alt="images" className='rounded-lg' />
                        </div>)
                    }
                </div>
                {/* part 2 */}
                <div>
                    {
                        galleries.slice(3, 4).map(gallery => <div key={gallery.id}>
                            <img src={gallery.img} alt="images" className='rounded-lg' />
                        </div>)
                    }
                </div>
                {/* part 3 */}
                <div className='space-y-5'>
                    {
                        galleries.slice(4, 7).map(gallery => <div key={gallery.id}>
                            <img src={gallery.img} alt="images" className='rounded-lg' />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;