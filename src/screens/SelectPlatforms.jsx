//import libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { setNewPlatforms } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
const SelectPlatforms = ( { route, navigation } ) => {

    const { platformsSelect } = route.params;
    const dispatch = useDispatch();

    const [openP, setOpenP] = useState(false);
    const [valueP, setValueP] = useState([]);

          
    useEffect(() => { 

        if (platformsSelect.length) {
            console.log(platformsSelect);
            let Selected = platformsSelect.split(', ');
            setValueP(Selected);
        }

    }, []);


    // const [platforms, setPlatforms] = useState([]);

    
    let itemPlatforms = [             // itemdata for Platforms Picker`s items
        {label:'PC', value:'PC'},
        {label:'Xbox Series S/X', value:'Xbox Series S/X'},
        {label:'PlayStation 4', value:'PlayStation 4'},
        {label:'PlayStation 3', value:'PlayStation 3'},  
        {label:'Xbox 360', value:'Xbox 360'},
        {label:'Xbox One', value:'Xbox One'},       
        {label:'PlayStation 5', value:'PlayStation 5'},
        {label:'Nintendo Switch', value:'Nintendo Switch'},
        {label:'Linux', value:'Linux'},
        {label:'macOS', value:'macOS'},
        {label:'Android', value:'Android'},
        {label:'PS Vita', value:'PS Vita'},
        {label:'iOS', value:'iOS'},
        {label:'Xbox', value:'Xbox'},
        {label:'Web', value:'Web'},
        {label:'Wii U', value:'Wii U'},
        {label:'Nintendo 3DS', value:'Nintendo 3DS'},
        {label:'PlayStation 2', value:'PlayStation 2'},
        {label:'Dreamcast', value:'Dreamcast'},
        {label:'PSP', value:'PSP'}
    ]

    // function handlePlatform(){      // update Platforms selected
    //     setPlatforms(valueP)
    // }  

    function setUpPlatforms() {

        //alert('platform selected');

        let valor = (valueP.join(', '))

        dispatch(setNewPlatforms(valor));

        navigation.navigate('Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>Select the Platforms...</Text>

                <View style={{width: 260, alignSelf: 'center', padding: 20}}>
                    <DropDownPicker
                        style={{backgroundColor: 'lightblue', borderColor: 'purple'}}
                        multiple={true}
                        min={0}
                        max={10}
                        open={openP}
                        value={valueP}
                        items={itemPlatforms}
                        setOpen={setOpenP}
                        setValue={setValueP}
                        //onChangeValue ={handlePlatform}
                    />
                    <View style={valueP.length ? styles.containerValue : styles.containerValue0}>
                        { valueP
                            ? valueP.map((c, index) => {         //  show selected platform
                                return (
                                    <View style={styles.valueLabel} key={index} >
                                        <Text style={styles.txtPlatforms}>{c}</Text>
                                    </View>
                                )
                            })
                            : (null)
                        }
                    </View>
                </View>
                    <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Set Platforms'
                            onPress={() => setUpPlatforms()}>
                        </Button>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerAll: { 
        borderWidth: 2, 
        borderColor: 'blue',
        borderRadius: 10
    },
    containerValue: {
        flexDirection: 'column',
        marginTop: 5,
        padding: 10,
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: 'purple',
    }, 
    containerValue0: {
        borderWidth: 0, 
    },
    txtPlatforms: { 
        backgroundColor: 'lightblue', 
        marginVertical: 2, 
        paddingHorizontal: 10,
    }
});

//make this component available to the app
export default SelectPlatforms;
