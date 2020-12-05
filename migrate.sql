create table characterMap
(
    id      text not null unique,
    name    text not null,
    star    int  not null,
    damage  int  not null,
    brk     int  not null,
    defence int  not null,
    maxhp   int  not null,
    weapon  text not null
);

create table characters
(
    owner   text not null,
    type    text not null,
    level   int  not null default 1,
    damage  int  not null,
    count   int  not null,
    open    int  not null,
    brk     int  not null,
    defence int  not null,
    nowhp   int  not null,
    maxhp   int  not null,
    weapon  text not null
);

insert into characterMap (id, name, star, damage, brk, defence, maxhp, weapon)
values
    /*4*/
    ('kaeya', '케이아', 4, 41, 0, 57, 912, 'os'),
    ('xingqiu', '행추', 4, 41, 0, 57, 912, 'os'),
    ('razer', '레이저', 4, 41, 0, 57, 912, 'ts'),
    ('noelle', '노엘', 4, 57, 0, 57, 912, 'ts'),
    ('beidou', '북두', 4, 41, 0, 57, 912, 'ts'),
    ('chongyun', '중운', 4, 41, 0, 57, 912, 'ts'),
    ('amber', '엠버', 4, 41, 0, 57, 912, 'b'),
    ('fischl', '피슬', 4, 41, 0, 57, 912, 'b'),
    ('xiangling', '향릉', 4, 41, 0, 57, 912, 's'),
    ('lisa', '리사', 4, 41, 0, 57, 912, 'l'),
    ('barbara', '바바라', 4, 41, 0, 57, 912, 'l'),
    ('sucrose', '설탕', 4, 41, 0, 57, 912, 'l'),
    ('ningguang', '음광', 4, 41, 0, 57, 912, 'l'),
    /*5*/
    ('jean', '진', 5, 41, 0, 57, 912, 'os'),
    ('keqing', '각청', 5, 41, 0, 57, 912, 'os'),
    ('diluc', '다이루크', 5, 41, 0, 57, 912, 'ts'),
    ('venti', '벤티', 5, 41, 0, 57, 912, 'b'),
    ('klee', '클레', 5, 41, 0, 57, 912, 'l'),
    ('mona', '모나', 5, 41, 0, 57, 912, 'l'),
    ('qiqi', '치치', 5, 41, 0, 57, 912, 'os');

CREATE TABLE users (id text not null,
        profile boolean not null default false,
        name text not null default 'new user',
        money int not null default 1000,
        gem int not null default 10,
        Mlv int not null default 1,
        Clv int not null default 1,
        brk int not null default 0,
        damage int not null default 41,
        defence int not null default 57,
        nowHp int not null default 912,
        maxHp int not null default 912);

