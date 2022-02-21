import { useDispatch, useSelector } from 'react-redux';
import { show, hide } from '@reducers/alert/alertSlice';

export function useAlert() {
    const isShow = useSelector((state) => state.alert.value)
    const dispatch = useDispatch();

    if(isShow) {
        const timeout = setTimeout(() => {
            dispatch(hide());
            clearTimeout(timeout);
        }, 5000)
    }

    return () => dispatch(show())
}