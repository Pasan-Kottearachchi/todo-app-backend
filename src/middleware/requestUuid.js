import { v4 as uuidv4 } from 'uuid';
import { setRequestUuid } from '../utils/context';

export default function requestUuid(options) {
  const RQ_UUID_HEADER = (options && options.header) || 'request-uuid';
  return (req, res, next) => {
    let id = req.get(RQ_UUID_HEADER);
    if (!id) id = uuidv4();
    res.set(RQ_UUID_HEADER, id);
    setRequestUuid(id);
    next();
  };
}
