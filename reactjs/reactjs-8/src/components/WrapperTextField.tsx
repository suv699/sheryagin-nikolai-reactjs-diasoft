import React, {ComponentType, Component} from 'react';

export interface IProps {
  error?: boolean;
  value: string;
}

export function WrapperTextField<T extends object>(WrapComponent: ComponentType<T>) {
  return class WrapperTextField extends Component<IProps & T> {
    state = {
      isError: false,
      marked: false,
    };
    //отмечаем что были в поле и его надо валидировать при выходе
    markedField = () => {
      this.setState({marked: true});
    };
    validateField = () => {
      this.setState({isError: !this.props.value});
    };

    render() {
      return (
        <WrapComponent
          {...this.props}
          error={this.state.isError}
          onFocus={this.markedField}
          onBlur={this.validateField}
        />
      );
    }
  };
}
