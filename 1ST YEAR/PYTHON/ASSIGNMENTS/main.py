from tkinter import *  
from PIL import ImageTk, Image

 # Encoding and Decoding Functions
def encrypt(text):
    text_list = text.split(" ")
    encrypted_text = ""
    
    for word in text_list:
        if len(word) >= 3:
            if word[-3:] != "erb":
                word_ending = word[1:]
                encrypted_text = encrypted_text + word[1:] + word[0] + "erb "
            else:
                encrypted_text = "Already in Ferb-Latin!"
        else:
            encrypted_text = encrypted_text + word + " "
    
    return encrypted_text


def decrypt(text):
    text_list = text.split(" ")
    decrypted_text = ""

    for word in text_list:
        if len(word) >= 3:
            if word[-3:] == "erb":
                word = word[:-3]
                first_letter = word[-1]
                word = word[:-1]
                decrypted_text = decrypted_text + first_letter + word + " "
            else:
                decrypted_text = "Only Use Ferb Latin!"
        
        else:
            decrypted_text = decrypted_text + word + " "
    
    return decrypted_text


# Coordinate Settings
# Suitable Window Sizes should be in a ratio of 1.333
WINDOW_X          =    800
WINDOW_Y          =    int(WINDOW_X/1.333)
WINDOW_DIM        =    str(WINDOW_X) + "x" + str(WINDOW_Y)
WINDOW_TITLE      =    "Ferb-Latin Translator"
                        
Heading_1_X       =    int(WINDOW_X * 0.34375)
Heading_1_Y       =    int(WINDOW_Y * 0.067)
Heading_D_X       =    int(WINDOW_X * 0.4925)
Heading_D_Y       =    int(WINDOW_Y * 0.067)
Heading_2_X       =    int(WINDOW_X * 0.52625)
Heading_2_Y       =    int(WINDOW_Y * 0.067)
Heading_3_X       =    int(WINDOW_X * 0.35625)
Heading_3_Y       =    int(WINDOW_Y * 0.18)
Heading_res_X     =    int(WINDOW_X * 0.51875)
Heading_res_Y     =    int(WINDOW_Y * 0.625)
USR_INP_X         =    int(WINDOW_X * 0.125)
USR_INP_Y         =    int(WINDOW_Y * 0.4167)
BTN_EN_X          =    int(WINDOW_X * 0.35)
BTN_EN_Y          =    int(WINDOW_Y * 0.5)
BTN_DE_X          =    int(WINDOW_X * 0.525)
BTN_DE_Y          =    int(WINDOW_Y * 0.5)
FRAME_P_X         =    int(WINDOW_X * 0)
FRAME_P_Y         =    int(WINDOW_Y * 0.6)
FRAME_F_X         =    int(WINDOW_X * 0.85)
FRAME_F_Y         =    int(WINDOW_Y * 0.516)


# Visual Settings
FONT              =    "Comic Sans MS"
COLOR_NEON_ORANGE =    "#FF5F1F"
COLOR_NEON_GREEN  =    "#39FF14"
COLOR_NEON_BLUE   =    "#1F51FF"
COLOR_BLACK       =    "black"
COLOR_WHITE       =    "white"
HEADING_FONTSIZE  =    int(WINDOW_X * 0.05)
BTN_FONT          =    int(WINDOW_X * 0.015)
IN_OUT_FONT       =    int(WINDOW_X * 0.01875)
FONT_GENERAL      =    (FONT, HEADING_FONTSIZE, "bold")
IMG_P_X           =    int(WINDOW_X * 0.1875)
IMG_P_Y           =    int(WINDOW_X * 0.3)
IMG_F_X           =    int(WINDOW_X * 0.125)
IMG_F_Y           =    int(WINDOW_X * 0.36)



root = Tk()    
root.geometry(WINDOW_DIM)  
root.configure(bg = COLOR_WHITE)
root.title(WINDOW_TITLE)
root.resizable(0,0)
  
# # headings
heading_1 = Label(root,
                  text = "Ferb",
                  font = FONT_GENERAL,
                  fg = COLOR_NEON_ORANGE,
                  bg = COLOR_WHITE)
heading_1.place(x = Heading_1_X, y = Heading_1_Y)

heading_D = Label(root, text = "-", 
                  font = FONT_GENERAL,
                  fg = COLOR_BLACK,
                  padx = 0,
                  pady = 0,
                  bg = COLOR_WHITE)
heading_D.place(x = Heading_D_X, y = Heading_D_Y)
  
heading_2 = Label(root,
                  text = "Latin",
                  font = FONT_GENERAL,
                  fg = COLOR_NEON_GREEN,
                  bg = COLOR_WHITE)
heading_2.place(x = Heading_2_X, y = Heading_2_Y)

heading_3 = Label(root,
                  text = "Translator",
                  font = FONT_GENERAL,
                  fg = COLOR_NEON_BLUE,
                  pady = 0,
                  bg = COLOR_WHITE)
heading_3.place(x = Heading_3_X, y = Heading_3_Y)

heading_res = Label(root,
                    text = "",
                    font = (FONT, IN_OUT_FONT),
                    fg = COLOR_BLACK,
                    pady = 0,
                    bg = COLOR_WHITE)
heading_res.place(x = Heading_res_X, y = Heading_res_Y, anchor = CENTER)
 


# # Input and buttons
user_input = Text(root,
                  height = 1,
                  width = 50,
                  font = (FONT, IN_OUT_FONT))
user_input.place_configure(x = USR_INP_X, y = USR_INP_Y)

btn_en = Button(root,
                height = 0,
                width = 12,
                text = "Encrypt",
                bg = COLOR_NEON_ORANGE,
                fg = COLOR_BLACK, font = (FONT, BTN_FONT), 
                command = lambda: data_encrypt(),
                activebackground = COLOR_NEON_GREEN)
btn_en.place(x = BTN_EN_X, y = BTN_EN_Y)

btn_de = Button(root,
                height = 0,
                width = 12,
                text = "Decrypt",
                bg = COLOR_NEON_GREEN,
                fg = COLOR_BLACK,
                font = (FONT, BTN_FONT), 
                command = lambda: data_decrypt(),
                activebackground = COLOR_NEON_ORANGE)
btn_de.place(x = BTN_DE_X, y = BTN_DE_Y)



# # Adding Images
frame_P = Frame(root, width = 300, height = 360)
frame_P.place(x = FRAME_P_X, y = FRAME_P_Y)

frame_F = Frame(root, width = 300, height = 360)
frame_F.place(x = FRAME_F_X, y = FRAME_F_Y)

# # Phineas
# img_P = Image.open("./images/phineas.png")
# img_P = img_P.resize((IMG_P_X, IMG_P_Y))
# img_P = ImageTk.PhotoImage(img_P)

# # Ferb
# img_F = Image.open("./images/ferb-removebg-preview.jpg")
# img_F = img_F.resize((IMG_F_X, IMG_F_Y))
# img_F = ImageTk.PhotoImage(img_F)

# imgP = Label(frame_P, image = img_P, bg = COLOR_WHITE)
# imgF = Label(frame_F, image = img_F, bg = COLOR_WHITE)

# # Packing the images
# imgF.pack()
# imgP.pack()



# Function for the buttons
def data_encrypt():
    value = user_input.get("1.0", "end-1c")
    if value != "":
        value = encrypt(value)
        heading_res.config(text = value)

def data_decrypt():
    value = user_input.get("1.0", "end-1c")
    if value != "":
        value = decrypt(value)
        heading_res.config(text = value)

root.mainloop()