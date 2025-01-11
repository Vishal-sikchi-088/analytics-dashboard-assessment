import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const VehicleCountByMake = ({ data }) => {
  const makeCount = data.reduce((acc, vehicle) => {
    acc[vehicle.Make] = (acc[vehicle.Make] || 0) + 1;
    return acc;
  }, {});

  return (
    <Card sx={{ width: '100%', marginBottom: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom color="primary">
          Vehicles by Make
        </Typography>
        <List>
          {Object.entries(makeCount).map(([make, count]) => (
            <React.Fragment key={make}>
              <ListItem>
                <ListItemText
                  primary={make}
                  secondary={`${count} vehicles`}
                  primaryTypographyProps={{ fontWeight: 'bold', fontSize: 16 }}
                  secondaryTypographyProps={{ fontSize: 14, color: 'text.secondary' }}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default VehicleCountByMake;
