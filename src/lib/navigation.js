import { NavigationActions } from 'react-navigation';

const resetNavigation = (nextScreen: string, navigation: Object) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: nextScreen }),
    ],
  });

  navigation.dispatch(resetAction);
};

export {
  resetNavigation,
};
