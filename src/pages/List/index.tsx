import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {

    const months = [
        {value: 'Janeiro', label: 'Janeiro'},
        {value: 'Fevereiro', label: 'Fevereiro'},
        {value: 'Março', label: 'Março'},
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
        {value: 'Julho', label: 'Julho'},
        {value: 'Agosto', label: 'Agosto'},
        {value: 'Setembro', label: 'Setembro'},
        {value: 'Outubro', label: 'Outubro'},
        {value: 'Novembro', label: 'Novembro'},
        {value: 'Dezembro', label: 'Dezembro'}
    ]

    const years = [
        {value: '2019', label: '2019'},
        {value: '2020', label: '2020'},
        {value: '2021', label: '2021'}
    ]

    return (
        <Container>
            <ContentHeader title="Saidas" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/08/2020"
                    amount="R$ 234,89"
                />
            </Content>
        </Container>
    );
}

export default List;