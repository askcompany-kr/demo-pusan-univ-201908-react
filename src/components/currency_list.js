import React, { Component } from 'react';
import { rates as jsonvat_rates } from '../data/jsonvat';


const CurrencyItem = ({ country }) => {
    const { name, code } = country;
    return <li>{name} : {code}</li>;
};

// class CurrencyItem extends Component {
//     render() {
//         const { country } = this.props;
//         return <li>{country.name} : {country.code}</li>;
//     }
// }

class CurrencyItemList extends Component {
    state = {
        // 초기 1회만 itemList 속성값을 참조해서, 상탯값 할당
        itemListLength: this.props.itemList.length
    };
    // constructor(props) {
    //     super(props);
    //     const { itemList } = this.props;
    //     this.state = {
    //         itemListLength: itemList.length
    //     };
    // }

    render() {
        const { itemList } = this.props;
        const { itemListLength } = this.state;
        return (
            <div>
                갯수 : { itemListLength }
                <ul>
                    {itemList.map(country =>
                        <CurrencyItem key={country.code} country={country} />
                    )}
                </ul>
            </div>
        );
    }
}

class CurrencyList extends Component {
    state = { itemList: jsonvat_rates };

    render() {
        const { itemList } = this.state;
        return (
            <div>
                <h2>Currency List</h2>
                <CurrencyItemList itemList={itemList} />
                {JSON.stringify(this.dummyData)}
            </div>
        );
    }
}

export default CurrencyList;
