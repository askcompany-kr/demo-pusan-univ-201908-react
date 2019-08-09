import React, { Component } from 'react';
import axios from 'axios';


class CurrencyItem extends Component {
    render() {
        const { country } = this.props;
        return <li>{country.name} : {country.code}</li>;
    }
}

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
    // jsonvat.com
    dummyData = [
        { name: 'Spain', code: 'ES' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Hungary', code: 'HU' }
    ];

    // 컴포넌트가 마운트되었때
    async componentDidMount() {
        try {
            const response = await axios.get("https://jsonvat.com");
            console.log(response);
            // response.rates => setState에 적용
        }
        catch(e) {
            console.error(e);
        }
    }

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
