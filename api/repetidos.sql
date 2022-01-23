select name from products
group by name
having count(*)>1;

select * from products where name='Mini Consola Retro Family Game 620 Juegos Clásicos 8 Bits';
-- select * from products where name='Consola Video Juegos Retro Generica + Joystick Sup 400 Juego';
-- select * from products where name='Consola De Videos Juegos Family Mini Joysticks Inalámbricos';