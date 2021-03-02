import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://typegraphql:admin@typegraphql.779lk.mongodb.net/typegraphql?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);
