import React, { Component } from 'react';

class CurrencyItem extends Component {
    render() {
        const { country } = this.props;
        return <li>{country.name} : {country.code}</li>;
    }
}

class CurrencyItemList extends Component {
    render() {
        const { itemList } = this.props;
        return (
            <ul>
                {itemList.map(country =>
                    <CurrencyItem key={country.code} country={country} />
                )}
            </ul>
        );
    }
}

class CurrencyList extends Component {
    // jsonvat.com
    dummyData = [
        { name: 'Spain', code: 'ES' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Hungary', code: 'HU' }
    ];

    render() {
        return (
            <div>
                <h2>Currency List</h2>
                <CurrencyItemList itemList={this.dummyData} />
                {JSON.stringify(this.dummyData)}
            </div>
        );
    }
}

export default CurrencyList;
