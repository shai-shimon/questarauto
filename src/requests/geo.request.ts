import { vehicleList } from "../mock"
import _ from 'underscore';
import { distance } from "../utils"
import { Data, Vehicle, Point } from '../interfaces';

const getvehicleId = async (): Promise<string[]> => Object.keys(_.groupBy(vehicleList, 'vId'))

const getVehicleByDate = async (id: number): Promise<Vehicle> => {

    let vehicles: Vehicle[] = []
    var vList = _.groupBy(vehicleList.filter(v => v.vId === id), 'date')
    const keys = Object.keys(vList)

    let v: Vehicle = { id: id }
    let dataList: Data[] = []

    keys.forEach(key => {
        let points: Point[] = []
        let data: Data = {
            date: key
        }
        let dis: number = 0;
        for (let i = 0; i < vList[key].length; i++) {
            const v = vList[key];
            const long1 = v[i].long;
            const lat1 = v[i].lat;
            points.push({ lng: long1, lat: lat1 })

            if (i < vList[key].length - 1) {
                const long2 = v[i + 1].long;
                const lat2 = v[i + 1].lat;
                dis += distance(lat1, long1, lat2, long2)!;
            }
        }
        data.distance = dis.toString() + "KM";
        data.points = points;
        dataList.push(data)
        v.data = dataList;
    });
    return v;
}
export { getvehicleId, getVehicleByDate }