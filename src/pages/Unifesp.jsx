import { Card, CardContent, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Unifesp = () => {
  const data = [
    { name: "ARN", grade: 9.5 },
    { name: "ACM", grade: 10.0 },
    { name: "AGDSS", grade: 9.0 },
    { name: "AC", grade: 9.5 },
    { name: "AHDS", grade: 10.0 },
    { name: "ACDSP", grade: 8.5 },
    { name: "AFDN", grade: 8.3 },
    { name: "BCDS", grade: 9.0 },
    { name: "CMZ", grade: 8.3 },
    { name: "CRS", grade: 9.0 },
    { name: "CFLS", grade: 6.5 },
    { name: "CIRS", grade: 6.0 },
    { name: "CMLL", grade: 8.3 },
    { name: "DMBB", grade: 7.8 },
    { name: "EM", grade: 10.0 },
    { name: "EN", grade: 9.5 },
    { name: "FGM", grade: 5.0 },
    { name: "GFU", grade: 9.0 },
    { name: "GN", grade: 8.5 },
    { name: "HMVS", grade: 9.8 },
    { name: "HJAV", grade: 7.0 },
    { name: "IML", grade: 5.5 },
    { name: "JELA", grade: 10.0 },
    { name: "JHLS", grade: 9.8 },
    { name: "LNM", grade: 4.0 },
    { name: "LEBA", grade: 8.5 },
    { name: "MNC", grade: 8.3 },
    { name: "NMG", grade: 8.0 },
    { name: "PSA", grade: 8.8 },
    { name: "RPA", grade: 8.5 },
    { name: "RS", grade: 8.0 },
    { name: "RGD", grade: 6.8 },
    { name: "SLFL", grade: 4.8 },
    { name: "VP", grade: 8.0 },
    { name: "VR", grade: 8.8 },
    { name: "WMC", grade: 10.0 },
    { name: "WLA", grade: 8.3 }
  ];

  // Calculate statistics
  const grades = data.map(item => item.grade);
  const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
  const highest = Math.max(...grades);
  const lowest = Math.min(...grades);
  const perfectScores = grades.filter(grade => grade === 10.0).length;

  // Count approved and failed students
  const approvedCount = grades.filter(grade => grade >= 7).length;
  const failedCount = grades.filter(grade => grade < 7).length;

  // Sort data by grade in descending order
  const sortedData = [...data].sort((a, b) => b.grade - a.grade);

  // Prepare data for the bar chart
  const chartData = sortedData.map(item => ({
    name: item.name,
    grade: item.grade,
  }));

  return (
    <div style={{ textAlign: 'center' }}>
      <Card sx={{ mb: 4, margin: '0 auto', maxWidth: '1200px' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Análise de Notas dos Projetos
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Média</Typography>
                <Typography variant="h4">{average}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Maior Nota</Typography>
                <Typography variant="h4">{highest}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Menor Nota</Typography>
                <Typography variant="h4">{lowest}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Notas 10</Typography>
                <Typography variant="h4">{perfectScores}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Aprovados</Typography>
                <Typography variant="h4">{approvedCount}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb' }}>
                <Typography color="primary" variant="subtitle2">Reprovados</Typography>
                <Typography variant="h4">{failedCount}</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Bar Chart Section */}
          <Typography variant="h6" gutterBottom>
            Distribuição das Notas
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="grade" fill="#8884d8">
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.grade < 7 ? '#FF4C4C' : '#8884d8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <TableContainer sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Table sx={{ maxWidth: '900px', width: '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Posição</TableCell>
                  <TableCell align="center">Iniciais</TableCell>
                  <TableCell align="center">Nota</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center" style={{ color: item.grade < 7 ? 'red' : 'inherit' }}>
                      {item.grade}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unifesp;