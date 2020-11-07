import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.post(url).then(res=>res.data);