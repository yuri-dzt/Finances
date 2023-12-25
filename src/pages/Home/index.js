import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto da Conta de Luz',
        value: '300,90',
        date: '17/12/2023',
        type: 0, //Despesas
    },
    {
        id: 2,
        label: 'Pix do Cliente X',
        value: '2.500,00',
        date: '11/12/2023',
        type: 1, //Receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.500,00',
        date: '05/12/2023',
        type: 1, //Receita
    }
]

const Home = () => {
  return (
    <View style={styles.container}>
        <Header name={'Yuri Donizete'}/>
        <Balance saldo={'9.250,90'} gastos={'-527,00'}/>
        <Actions/>
        <Text style={styles.title}>
            Últimas movimentações
        </Text>
        <FlatList 
         style={styles.list}
         data={list} 
         keyExtractor={(item) => String(item.id)} 
         showsVerticalScrollIndicator={false} 
         renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

export {Home}
