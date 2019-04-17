const tower = (disk, source, destination, intermediate) => {
    if(disk === 1){
        console.log(`Move Disk 1 from ${source} to peg ${destination}`);
        return;
      } else {
        tower(disk - 1, source, intermediate, destination);
        console.log(`move disk ${disk} from ${source} to ${destination}`);
        tower(disk - 1, intermediate, destination, source);
      }
};
