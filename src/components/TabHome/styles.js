const WIDTH_SCREEN = Dimensions.get('window').width;
const TAB_WIDTH = WIDTH_SCREEN / 4;

export const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10
  },
  tabText: {
    color: theme.dark,
    fontSize: 14,
    fontWeight: '500'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  indicator: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#11C76F',
    height: 2,
    width: TAB_WIDTH - 10
  }
});
