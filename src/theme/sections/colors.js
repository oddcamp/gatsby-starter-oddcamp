// eslint-disable-next-line import/no-webpack-loader-syntax
import colors from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../assets/stylesheets/app/base/_colors.scss';

export default { ...colors };
