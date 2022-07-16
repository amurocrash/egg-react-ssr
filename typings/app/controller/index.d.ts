// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportSsr from '../../../app/controller/ssr';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    ssr: ExportSsr;
  }
}
