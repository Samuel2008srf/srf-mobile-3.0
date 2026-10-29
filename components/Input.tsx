import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
    placeholder?: string;
    [key: string]: any;
}

function Input({ placeholder, ...rest }: InputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000000',
        fontSize: 16,
        paddingLeft: 12,
    },
});

export default Input;