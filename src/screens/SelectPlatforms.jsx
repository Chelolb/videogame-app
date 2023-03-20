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

    const [openPlatforms, setOpenPlatforms] = useState(false);
    const [arrayPlatforms, setArrayPlatforms] = useState([]);

          
    useEffect(() => {    // if have params => read and create array

        if (platformsSelect.length) {
            let Selected = platformsSelect.split(', ');
            setArrayPlatforms(Selected);
        }

    }, []);

    
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

    function setUpPlatforms() {       // send genres array at store

        let conjuntoPlatforms = (arrayPlatforms.join(', '))

        dispatch(setNewPlatforms(conjuntoPlatforms));

        navigation.navigate('Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>
                    Select the Platforms...
                </Text>

                <View style={{width: 260, alignSelf: 'center', padding: 20}}>
                    <DropDownPicker
                        style={{ 
                            borderColor: 'purple'}}
                        multiple={true}
                        min={0}
                        max={10}
                        open={openPlatforms}
                        value={arrayPlatforms}
                        items={itemPlatforms}
                        setOpen={setOpenPlatforms}
                        setValue={setArrayPlatforms}
                        //onChangeValue ={handlePlatform}
                    />
                    <View style={arrayPlatforms.length ? styles.containerValue : styles.containerValue0}>
                        { arrayPlatforms
                            ? arrayPlatforms.map((c, index) => {         //  show selected platform
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
                            enable= {arrayPlatforms.length ? true : false}
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
        backgroundColor: '#D0D0D0',
    },
    containerAll: { 
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30, 
        backgroundColor: 'white',
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
