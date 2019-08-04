/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
import { styles } from './styles';
// Config
import { paths } from "../config";

function watchFiles() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
}

export const watch = series(
  watchFiles
);
