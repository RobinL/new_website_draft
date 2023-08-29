import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="mb-5 text-xs">
            <strong className="mr-2">Filter:</strong>
            <button
                className={`px-1 py-2 mr-2 capitalize ${
                    selectedCategory === 'all' ? 'bg-gray-300' : 'bg-white'
                }`}
                onClick={() => onSelectCategory('all')}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-1 py-2 mr-2 capitalize ${
                        selectedCategory === category
                            ? 'bg-gray-300'
                            : 'bg-white'
                    }`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
